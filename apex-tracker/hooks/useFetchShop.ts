import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../utils/axiosInstance'
import { StoreItem } from '../interfaces/Store'

const fetchShop = async (): Promise<StoreItem[]> => {
    const res = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_APEX_API_URL}/store`
    )
    return res.data
}

const useFetchShop = () => {
    return useQuery<StoreItem[], Error>(['store'], () => fetchShop())
}

export default useFetchShop
