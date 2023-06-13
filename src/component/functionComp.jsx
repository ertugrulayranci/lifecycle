import { useEffect, useState } from 'react';

const Paper = () => {
  const [todo, setTodo] = useState({});
  const [page, setPage] = useState(1);

   // bileşenin ekrana gelme anını izler
   useEffect(() => {
  console.log('DİD MOUNT ÇALIŞTI');
   }, []);

  // bileşen her render olduğunda çalışır
  useEffect(() => {
    console.log('Bileşen Güncellendi');
  });

  //  belirli bir state değiştiğinde çalışır
  useEffect(() => {
  // api isteği atma
  fetch(`https://jsonplaceholder.typicode.com/todos/${page}`)
  //eğer istek başarılı olursa gelen cevabı işle
  .then((res) => res.json())
  //      işlenmiş cevabı al ve state aktar
  .then((data) => setTodo(data));
     }, [page]);

//bileşenin ekrandan gitme olayı
useEffect(()=>{console.log(" ekrana geldi");
return()=>{console.log("ekrandan gitti")}})
    return( 
        <div>
            <h1>Fonksiyonel bileşen</h1>
            <p>ID degeri: {todo.id}</p>
            <h1>{todo.title}</h1>
            <p>Sayfa: {page}</p>
            <button onClick={()=>setPage(page+1)}>sayfa değiş</button>
        </div>
    )
}

export default Paper

/*

useEffect:
Amacı: componentDidMount, componentDidUpdate ve componentWillUnmount metotları yerine kulllanılı

Yazım Şekli:
1: useEffect(()=>{},[])
2-useEffect(()=>{})
3-useEffect(()=>{},[page])
4-useEffect(()=>{return()=>{},[]})---will unmount
Kullanımlar:

!1-bileşen ilk ekrana geldiğinde çalışır
a-bileşen ekrana geldiği anda çalışacak fonksiyom
b- boş bağımlılık dizisi
 ? useEffect(()=>{},[])

!2- bileşen her güncellendiğinde(state veya prop değiştiğinde)
? useEffect(()=>{})

!3 bileşenin içeriisndeki belirli bir state değiştiğinde çalışır
    a. fonkiyon
    b. bağımlılık diiine en a bir state
? ? useEffect(()=>{},[page])

!4 bileşen ekrandan gittiğinde çalışır
    a.fonksiyon
    b.boş veya dolu bağımlılık dizise
    c. fonksiyonun içeriinde  bir return satırı veya yeni fonksiyon
useEffect(()=>{
    console.log("bileşen geldi")
    return()=>{
        console.log("bileşen gitti")
    },[]})

*/
