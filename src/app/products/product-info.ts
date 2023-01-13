export interface productInfo {
    id:number
    title: string,
    price: number,
    description: string,
    category: string,
    rating:{rate:number,count:number},
    image: string
    quantity:number
    totalPrice:number
}