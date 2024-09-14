const clientRoute = {
    home: '/',
    detail: (id?: string | number) =>
        (
            (id)
                ? `product-detail/${id}`
                : 'product-detail/:id'
),
};

export default clientRoute;