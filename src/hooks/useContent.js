import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../supabaseClient'
import { treatiesData as staticTreaties, casesData as staticCases, resolutionsData as staticResolutions } from '../data'

/**
 * Content Hook - Prioritizes LOCAL static data, merges unique remote items
 * Filters out test/junk data automatically
 */
export function useContent() {
    const [treaties, setTreaties] = useState(staticTreaties)
    const [cases, setCases] = useState(staticCases)
    const [resolutions, setResolutions] = useState(staticResolutions)
    const [loading, setLoading] = useState(true)

    // Helper: Merge and deduplicate by name (static data wins)
    const mergeData = useCallback((remoteItems, staticItems) => {
        const map = new Map()

        // Add remote first (will be overwritten by static if same name)
        if (remoteItems && Array.isArray(remoteItems)) {
            remoteItems.forEach(item => {
                const name = item.name?.trim()
                if (name) map.set(name, item)
            })
        }

        // Add static second (overwrites remote duplicates)
        if (staticItems && Array.isArray(staticItems)) {
            staticItems.forEach(item => {
                const name = item.name?.trim()
                if (name) map.set(name, item)
            })
        }

        // Filter out test/junk entries and return
        return Array.from(map.values()).filter(item => {
            const name = (item.name || item.number || '').toLowerCase()
            return name && !name.includes('test') && name.length > 2
        })
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Treaties from Supabase
                const { data: remoteTreaties, error: treatiesError } = await supabase
                    .from('treaties')
                    .select('*')
                    .order('created_at', { ascending: false })

                if (!treatiesError && remoteTreaties) {
                    setTreaties(mergeData(remoteTreaties, staticTreaties))
                } else {
                    console.log('Using static treaties only')
                    setTreaties(staticTreaties)
                }

                // Fetch Cases from Supabase
                const { data: remoteCases, error: casesError } = await supabase
                    .from('cases')
                    .select('*')
                    .order('created_at', { ascending: false })

                if (!casesError && remoteCases) {
                    setCases(mergeData(remoteCases, staticCases))
                } else {
                    console.log('Using static cases only')
                    setCases(staticCases)
                }

                // Fetch Resolutions from Supabase
                const { data: remoteResolutions, error: resolutionsError } = await supabase
                    .from('resolutions')
                    .select('*')
                    .order('created_at', { ascending: false })

                if (!resolutionsError && remoteResolutions && remoteResolutions.length > 0) {
                    // For resolutions, merge with static data using 'number' as key
                    const resMap = new Map()
                    remoteResolutions.forEach(r => resMap.set(r.number?.trim(), r))
                    staticResolutions.forEach(r => resMap.set(r.number?.trim(), r))
                    setResolutions(Array.from(resMap.values()).filter(r => r.number))
                } else {
                    setResolutions(staticResolutions)
                }

            } catch (error) {
                console.error("Error fetching content:", error)
                // Fallback to static data on error
                setTreaties(staticTreaties)
                setCases(staticCases)
                setResolutions(staticResolutions)
            } finally {
                setLoading(false)
            }
        }

        fetchData()

        // Realtime Subscriptions (optional, for live updates)
        const treatiesSub = supabase.channel('public:treaties')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'treaties' }, payload => {
                if (payload.new && payload.new.name && !payload.new.name.toLowerCase().includes('test')) {
                    setTreaties(prev => [payload.new, ...prev.filter(t => t.name !== payload.new.name)])
                }
            })
            .subscribe()

        const casesSub = supabase.channel('public:cases')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'cases' }, payload => {
                if (payload.new && payload.new.name && !payload.new.name.toLowerCase().includes('test')) {
                    setCases(prev => [payload.new, ...prev.filter(c => c.name !== payload.new.name)])
                }
            })
            .subscribe()

        const resolutionsSub = supabase.channel('public:resolutions')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'resolutions' }, payload => {
                if (payload.new && payload.new.number) {
                    setResolutions(prev => [payload.new, ...prev.filter(r => r.number !== payload.new.number)])
                }
            })
            .subscribe()

        return () => {
            supabase.removeChannel(treatiesSub)
            supabase.removeChannel(casesSub)
            supabase.removeChannel(resolutionsSub)
        }
    }, [mergeData])

    // Helper: Check if item is new (within last 30 days)
    const isNew = (dateString) => {
        if (!dateString) return false
        const date = new Date(dateString)
        const now = new Date()
        const diffTime = Math.abs(now - date)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return diffDays <= 30
    }

    return { treaties, cases, resolutions, loading, isNew }
}
