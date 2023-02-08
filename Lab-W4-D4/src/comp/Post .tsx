import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Post() {
  const [data, setData] = React.useState<any[]>([]);
  const [text, setText] = useState<string>();
 

  const api = 'https://63e22a9bad0093bf29c944f1.mockapi.io/api/mydb';

  React.useEffect(() => {
    Get
  }, []);


  const Get = () => { 
    axios.get(api).then(res => {
        setData(res.data)
    })
}

  const Post = () => {
    axios
      .post(api, {
        text,
    
      })
      .then((res) => {
        Get()
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(api).then((res) => {
      console.log(res);
    });
  };

  function Delete(id: string) {
    axios.delete(api + `/${id}`).then((res) => {
      setData(data.filter((d) => d.id !== id));
    });
  }

  return (
    <div>
      <div className="edd">
        <h2> قائمة المهام</h2>
        <input
          type="text"
          placeholder=" ادخل المهام هنا "
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        
        <button type="submit" onClick={Post}>
          اضافة 
        </button>

       
      </div>
      <div>
        {data.map((d: any) => (
          <div key={d.id} className={"edd2"}>
            <ul>
              <li>
                  {d.text} 
              </li>
            </ul>
            <button className='b1'
              onClick={() => {
                Delete(d.id);
              }}
            >
              حذف
            </button>
            <button className='b2'>تعديل</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;