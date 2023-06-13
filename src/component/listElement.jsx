const ListElement = ({user}) =>{

    //yeniden oluşturma(deconstruct)
            //obje içerisindeki verilere erişme
            const { name, phone, address } = user;

    return(
        <li className="userli">
                {name}
                <br />
                {phone}
                <br />
                {address?.zipcode}
              </li>
    )
}
export default ListElement