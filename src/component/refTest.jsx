import { useRef } from "react";

const Search = () => {
  const inputRef = useRef();
  const input2Ref = useRef();
  
  const handleClick = () => {
    inputRef.current.focus();
    input2Ref.current.style.background = "red";
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <input type="text" ref={input2Ref} />
      <button onClick={handleClick}>Odaklan</button>
    </div>
  );
};

export default Search;

//useRef() JSX elemanlarını referans alır.
//js de queryselectorve getElementbyID ile benzer görev yapar.
//Kullanımı:
/*
    1-import useRef
    2-referansını almak istediğimiz elemana bir ref özelliği tanımla
    3- ref={} içeriine bir deger tanımlamak
    4- useRef metodunu çalıştır ve 3. adımda tanımladığın değeri gir.

*/
