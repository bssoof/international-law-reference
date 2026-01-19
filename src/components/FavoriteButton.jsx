import { IconButton, Tooltip } from '@chakra-ui/react'
// import { FiHeart } from 'react-icons/fi'
import { useUser } from '../context/UserContext'

export function FavoriteButton({ item, type }) {
    const { toggleFavorite, isFavorite } = useUser()
    const isFav = isFavorite(item.id, type)

    return (
        <Tooltip label={isFav ? "إزالة من المفضلة" : "إضافة للمفضلة"}>
            <IconButton
                icon={<span>{isFav ? "❤️" : "🤍"}</span>}
                onClick={() => toggleFavorite({ ...item, type })}
                variant="ghost"
                borderRadius="full"
                aria-label="Toggle Favorite"
                size="md"
            />
        </Tooltip>
    )
}
