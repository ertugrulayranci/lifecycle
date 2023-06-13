import { useEffect, useState, useRef } from "react";
import ListElement from "./listElement";
const FilterUser = () => {
  const [users, setUsers] = useState(null);
  const [cloneUsers, setCloneUsers] = useState(null);
  //inputun referansını alma
  const inputRef = useRef();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      //eğer cevap olumluyşa geleb cevabı  işle
      .then((res) => res.json())
      //işlenmiş veriyi statee aktar
      .then((data) => {
        setUsers(data);
        setCloneUsers(data);
      })

      .catch((err) => alert("tekrar deneyin"));
  }, []);
  const handleSearch = () => {
    //inputun değerini alma
    const query = inputRef.current.value.toLowerCase();
    // aratılan terime sahip kullanıcıları yeni bir diziye filtrele
    const filteredUser = cloneUsers.filter((user) =>
      user.name.toLowerCase().includes(query)
    );
    //ekrana baılan diziyi günceller
    setUsers(filteredUser);
  };

  return (
    <div>
      <h1>Kullanıcılar</h1>
      <input type="text" ref={inputRef} onChange={handleSearch} />
      <button onClick={handleSearch}>Ara</button>
      <ul>
        {/* /*eğer kullanıcışar boşşa loading yaz */}
        {users == null && <p>Loading..</p>}
        {/* /*eğer kullanıcı var --liştele */}
        {users && users.map((user) => <ListElement user={user} />)}
      </ul>
    </div>
  );
};
export default FilterUser;
