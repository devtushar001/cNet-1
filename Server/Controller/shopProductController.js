
export const addShopProductController = async (req, res) => {
    console.log(req)
    try {
        console.log()
        console.log(req.body.data);
        return res.status(200).json({
            success: true,
            message: `Got it`
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Api error ${error.message}`
        })
    }
}