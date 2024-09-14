import clientRoute from "../../config/clientRoute";
import HomeContainer from "../../module/home/HomeContainer";
import ProductDetailContainer from "../../module/productDetail/ProductDetailContainer";

export interface PageRoute {
    path: string
    title: string,
    isShow: boolean
    component?: React.ReactElement;
}

type IPageRoute = {
    [key: string]: Array<PageRoute>
}

export const PageRouteComponent: IPageRoute = {
    RouteSetting: [
        {
            path: clientRoute.home,
            title: 'List item',
            isShow: true,
            component: <HomeContainer />
        },
        {
            path: clientRoute.detail(),
            title: 'Product detail',
            isShow: true,
            component: <ProductDetailContainer />
        }
    ]
}