import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'
import { FaStar, FaRegStar } from 'react-icons/fa'

export function Reviews({ productId }) {
    const { user } = useAuth()
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({ rating: 5, comment: '' })
    const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
        fetchReviews()
    }, [productId])

    const fetchReviews = async () => {
        const { data } = await supabase
            .from('store_reviews')
            .select('*')
            .eq('product_id', productId)
            .order('created_at', { ascending: false })

        setReviews(data || [])
        setLoading(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!user) return

        setSubmitting(true)
        await supabase.from('store_reviews').insert([{
            product_id: productId,
            user_id: user.id,
            user_name: user.user_metadata?.full_name || 'Anonymous',
            rating: formData.rating,
            comment: formData.comment
        }])

        setFormData({ rating: 5, comment: '' })
        setShowForm(false)
        setSubmitting(false)
        fetchReviews()
    }

    const averageRating = reviews.length > 0
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
        : 0

    const StarRating = ({ rating, interactive = false, onChange }) => (
        <div style={{ display: 'flex', gap: '4px' }}>
            {[1, 2, 3, 4, 5].map(star => (
                <span
                    key={star}
                    onClick={() => interactive && onChange?.(star)}
                    style={{ cursor: interactive ? 'pointer' : 'default', color: '#ffb347' }}
                >
                    {star <= rating ? <FaStar /> : <FaRegStar />}
                </span>
            ))}
        </div>
    )

    return (
        <div style={{ marginTop: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                    <h3 style={{ marginBottom: '0.5rem' }}>Customer Reviews</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <StarRating rating={Math.round(averageRating)} />
                        <span style={{ color: '#888' }}>({reviews.length} reviews)</span>
                    </div>
                </div>
                {user && !showForm && (
                    <button onClick={() => setShowForm(true)} className="btn btn-outline">
                        Write a Review
                    </button>
                )}
            </div>

            {/* Review Form */}
            {showForm && (
                <form onSubmit={handleSubmit} style={{
                    backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '15px', marginBottom: '2rem'
                }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Your Rating</label>
                        <StarRating
                            rating={formData.rating}
                            interactive
                            onChange={(r) => setFormData({ ...formData, rating: r })}
                        />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Your Review</label>
                        <textarea
                            value={formData.comment}
                            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                            placeholder="Share your experience..."
                            style={{
                                width: '100%', padding: '12px', borderRadius: '8px',
                                border: '1px solid #ddd', minHeight: '100px'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button type="submit" className="btn btn-primary" disabled={submitting}>
                            {submitting ? 'Submitting...' : 'Submit Review'}
                        </button>
                        <button type="button" onClick={() => setShowForm(false)} className="btn btn-outline">
                            Cancel
                        </button>
                    </div>
                </form>
            )}

            {/* Reviews List */}
            {loading ? (
                <p>Loading reviews...</p>
            ) : reviews.length === 0 ? (
                <p style={{ color: '#888' }}>No reviews yet. Be the first to review!</p>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {reviews.map(review => (
                        <div key={review.id} style={{
                            backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px',
                            border: '1px solid #f0f0f0'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <strong>{review.user_name}</strong>
                                <StarRating rating={review.rating} />
                            </div>
                            <p style={{ color: '#666' }}>{review.comment}</p>
                            <p style={{ fontSize: '0.8rem', color: '#aaa', marginTop: '0.5rem' }}>
                                {new Date(review.created_at).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
