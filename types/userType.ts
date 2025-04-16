export type UserType={
    id:string;
    email:string;
    name:string;
    image:string
}
export type loginType={
    id?:string,
    name?:string,
    email:string,
    password:string,
    image?:string,
    token?:string
}
export  type allProductResponse={
    name: string;
    id:string;
    description: string;
    price: number;
    stock:number;
    category: string;
    brand:string
    discount: number;
    images:[{
        path:string
    }];
    reviews:[{
      rating:number;
      comment:string;
      reviewerEmail:string;
      reviewerName:string;
      
  
    }];
    dimensions:{
      depth:number;
      height:number;
      width:number
    }
  returnPolicy:string;
}
export type productResType={
    data:allProductResponse[],
    nextCursor:string
}