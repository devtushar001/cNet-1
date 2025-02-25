   const createShopCategory = async () => {
        if (!shopCategory.shopCategoryName.trim()) {
            toast.error("Category name is required");
            return;
        }

        if (!shopCategory.shopCategoryImage) {
            toast.error("Please upload an image");
            return;
        }

        try {
            const response = await fetch(`${backend_url}/api/shop-category/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(shopCategory),
            });

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();

            if (!data.success) {
                toast.error(data.message);
                return;
            }

            toast.success(data.message);
            console.log(data);

            setShopCategory({
                shopCategoryName: "",
                shopCategoryImage: null,
            });
            setCatImage(null);
            fetchShopCategory();

        } catch (error) {
            console.error(error.message);
            toast.error(error.message);
        }
    };