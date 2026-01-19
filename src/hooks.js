import { useState, useEffect } from 'react'
import { supabase, isSupabaseEnabled } from './lib/supabase'
import { treatiesData as localTreaties, casesData as localCases, resolutionsData as localResolutions } from './data'

// Fetch treaties from Supabase or fallback to local data
export function useTreaties() {
    const [data, setData] = useState(localTreaties)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            if (!isSupabaseEnabled()) {
                setLoading(false)
                return
            }

            try {
                const { data: treaties, error } = await supabase
                    .from('treaties')
                    .select('*')
                    .eq('approved', true)
                    .order('id', { ascending: true })

                if (error) throw error
                if (treaties && treaties.length > 0) {
                    setData(treaties)
                }
            } catch (err) {
                console.error('Error fetching treaties:', err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return { data, loading, error }
}

// Fetch cases from Supabase or fallback to local data
export function useCases() {
    const [data, setData] = useState(localCases)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            if (!isSupabaseEnabled()) {
                setLoading(false)
                return
            }

            try {
                const { data: cases, error } = await supabase
                    .from('cases')
                    .select('*')
                    .eq('approved', true)
                    .order('id', { ascending: true })

                if (error) throw error
                if (cases && cases.length > 0) {
                    setData(cases)
                }
            } catch (err) {
                console.error('Error fetching cases:', err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return { data, loading, error }
}

// Fetch resolutions from Supabase or fallback to local data
export function useResolutions() {
    const [data, setData] = useState(localResolutions)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            if (!isSupabaseEnabled()) {
                setLoading(false)
                return
            }

            try {
                const { data: resolutions, error } = await supabase
                    .from('resolutions')
                    .select('*')
                    .eq('approved', true)
                    .order('id', { ascending: true })

                if (error) throw error
                if (resolutions && resolutions.length > 0) {
                    setData(resolutions)
                }
            } catch (err) {
                console.error('Error fetching resolutions:', err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return { data, loading, error }
}

// Submit a new contribution (unapproved by default)
export async function submitContribution(table, data) {
    if (!isSupabaseEnabled()) {
        return { error: new Error('Supabase not configured') }
    }

    const { data: result, error } = await supabase
        .from(table)
        .insert([{ ...data, approved: false }])
        .select()

    return { data: result, error }
}
