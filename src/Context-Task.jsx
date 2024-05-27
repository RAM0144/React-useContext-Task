import { useContext, useState } from "react"
import CartContext from "./Cart-Context";

const Child = () => {

    const { cart, handleQty } = useContext(CartContext);

    return (
        <>
            {console.log("rendering child C")}

            {cart.map((pd) => {
                return (
                    <div key={pd.id}
                        style=
                        {{
                            border: "1px solid",
                            position: "relative",
                            height: "690px",
                            padding: "20px",
                            backgroundColor: "lightgray",

                        }}>
                        <br />
                        <img style={{ width: "30%", }} src={pd.images} alt={pd.name} />
                        <br />
                        <h2 style={{ position: "relative", bottom: 0 }} >{pd.title}</h2>

                        <h3>Description : {pd.description}</h3>

                        <h3>Brand :{pd.brand}</h3>

                        <h3>Rating :{pd.rating}</h3>

                        <h3>Stock : {pd.stock}</h3>

                        <h3>Discount : {pd.discountPercentage}</h3>
                        <select value={pd.quantity} onChange={(e) => {
                            const { value } = e.target;
                            handleQty(pd.id, value)
                        }} style={{ position: "fixed", right: 590, top: 50, width: "40px", height: "30px", color: "orange" }}>
                            <option value={"1"}>1</option>
                            <option value={"2"}>2</option>
                            <option value={"3"}>3</option>
                        </select>
                        <br />
                        <h2 style={{ position: "fixed", top: 30, right: 420 }}>price: ${pd.price * pd.quantity}</h2>

                        <h2 style={{ position: "fixed", right: 440, bottom: 160, color: "blue" }} >SUBTOTAL : ${pd.price * pd.quantity}</h2>
                        <br />

                        <h2 style={{ position: "fixed", right: 440, bottom: 100, color: "green" }} >SHIPPING : FREE</h2>
                        <br />

                        <h2 style={{ position: "fixed", right: 438, bottom: 20, color: "red" }} >TOTAL : ${pd.price * pd.quantity}</h2>

                    </div>
                )
            })}

        </>
    )
}

const parent = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            quantity: 1,
            discountPercentage: "12.96 %",
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            images: "https://th.bing.com/th/id/R.f3f75edee790a7f2f668939e026de969?rik=HTJ%2bOec74K%2fAYw&riu=http%3a%2f%2fwww.iphonekilif.com.tr%2ffile%2fopen%2f2102716361%2fiphone-9.jpg&ehk=N13c1cItjn1RfWYEZALDJC2elwlPqqGdfHrSk6Mnn3I%3d&risl=&pid=ImgRaw&r=0",

        },
    ]);


    const handleQty = (id, newQty) => {
        const obj = cart.find((pd) => pd.id === id);

        obj.quantity = newQty;

        const objIndex = cart.findIndex((pd) => pd.id === id);

        const temp = [...cart];
        temp[objIndex] = obj;
        setCart(temp)
    }

    return (
        <CartContext.Provider value={{ cart, handleQty }}>
            {console.log("rendering parent")}
            <Child />
        </CartContext.Provider>
    )
}

export default parent;


