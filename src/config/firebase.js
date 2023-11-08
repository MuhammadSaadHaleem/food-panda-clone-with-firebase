import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { collection, addDoc, getFirestore, getDocs, doc, getDoc } from "firebase/firestore"


import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCACk7l5M7ixoKj49yTxi3LgUJH5_g_Ta0",
  authDomain: "test-f994e.firebaseapp.com",
  projectId: "test-f994e",
  storageBucket: "test-f994e.appspot.com",
  messagingSenderId: "39216256426",
  appId: "1:39216256426:web:a2ebbf430b41d2f81507d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new FacebookAuthProvider();
const db = getFirestore(app);





function register(emailUpdate, passwordUpdate) {

  createUserWithEmailAndPassword(auth, emailUpdate, passwordUpdate)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // Showing alert for Successfully Signed up
      alert('Successfully Registerd')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Showing alert when received error

      alert(errorMessage)
    });

}

function login(emailUpdate, passwordUpdate) {

  try {
    return signInWithEmailAndPassword(auth, emailUpdate, passwordUpdate)
    alert('Successfully Login')


  }

  catch (e) {
    alert(e.message)
  }
  // .then((userCredential) => {
  //     // Showing alert for Successfully Signed In
  //     const user = userCredential.user;
  //     // Showing alert when received error
  // })
  // .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     alert(errorMessage)
  // });

}


const Facebook = async () => {


  try {
    const fb = signInWithPopup(auth, provider);
    return fb;
    alert('Successfully Login')


  }

  catch (e) {
    alert(e.message)
  }
}


const restro_data = [
  {
    "restaurant_name": "Karachi Biryani House",
    "cuisine_type": "Pakistani",
    "address": {
      "street": "456 Food Street",
      "city": "Karachi",
      "state": "SD",
      "postal_code": "78901"
    },
    "phone": "555-789-1234",
    "image_url": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "menu_categories": [
      {
        "category_name": "Starters",
        "items": [
          {
            "item": "Chicken Samosa",
            "price": 150,
            "item_image_url": "https://media.istockphoto.com/id/503654910/photo/phyllo-pastry-stuffed-pastel.jpg?s=2048x2048&w=is&k=20&c=vv4TdcPyEUaIeY5T43MCqPtWRI37rh0YAro7o86vZbw=",
          },
          {
            "item": "Vegetable Pakora",
            "price": 120,
            "item_image_url": "https://media.istockphoto.com/id/177314242/photo/vegetable-pakora.jpg?s=2048x2048&w=is&k=20&c=sBlZ9WHmb21vlyixT-VFTzrobC5EP9E-_PtGWPFgltc=",
          }
        ]
      },
      {
        "category_name": "Main Courses",
        "items": [
          {
            "item": "Chicken Biryani",
            "price": 350,
            "item_image_url": "https://media.istockphoto.com/id/1333127705/photo/chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-biriyani-pulao-golden.jpg?s=2048x2048&w=is&k=20&c=oesxo1AZJEltdN8JVsFvqXGi7Q9KdfIB4XawKpLFzKI=",
          },
          {
            "item": "Beef Karahi",
            "price": 300,
            "item_image_url": "https://media.istockphoto.com/id/1187226792/photo/overhead-view-of-goat-curry-mutton-curry-nihari-rogan-josh-in-a-bowl.jpg?s=2048x2048&w=is&k=20&c=VyNYz7Es-n7HoemjaaU9o2bLOk_da82gHB_eEhLaTAo=",
          }
        ]
      },
      {
        "category_name": "Desserts",
        "items": [
          {
            "item": "Gulab Jamun",
            "price": 80,
            "item_image_url": "https://media.istockphoto.com/id/163064596/photo/gulab-jamun.jpg?s=2048x2048&w=is&k=20&c=xCoJpX9VGS0EcxjhRJEjD1Egtuo9R5yis5oJlYa57jk=",
          },
          {
            "item": "Kheer",
            "price": 100,
            "item_image_url": "https://media.istockphoto.com/id/1318179086/photo/rabdi-or-rabri-served-in-clay-pot-diwali-desserts.jpg?s=2048x2048&w=is&k=20&c=2SHlZ_SUPkAVKpbuYfVTPuCXglIsPafwjcC2YxB5eCY=",
          }
        ]
      }
    ],
    "opening_hours": {
      "monday": "11:00 AM - 10:00 PM",
      "tuesday": "11:00 AM - 10:00 PM",
      "wednesday": "11:00 AM - 10:00 PM",
      "thursday": "11:00 AM - 10:00 PM",
      "friday": "11:00 AM - 11:00 PM",
      "saturday": "12:00 PM - 11:00 PM",
      "sunday": "12:00 PM - 9:00 PM"
    }
  },
  {
    "restaurant_name": "Spice of Lahore",
    "cuisine_type": "Indian",
    "address": {
      "street": "789 Spice Avenue",
      "city": "Karachi",
      "state": "SD",
      "postal_code": "56789"
    },
    "phone": "555-234-5678",
    "image_url": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "menu_categories": [
      {
        "category_name": "Appetizers",
        "items": [
          {
            "item": "Paneer Tikka",
            "price": 250,
            "item_image_url": "https://media.istockphoto.com/id/1157108710/photo/paneer-tikka-with-capsicum-and-onion-indian-and-pakistani-street-food.jpg?s=2048x2048&w=is&k=20&c=eUEN3lRdJbAueKgevu7h45RE99k4wBYGy7lnVCjpn8E=",
          },
          {
            "item": "Samosa Chaat",
            "price": 180,
            "item_image_url": "https://media.istockphoto.com/id/1310465017/photo/chole-samosa.jpg?s=2048x2048&w=is&k=20&c=Z4AKSBrx0soZSb9AQrx90_ph7ceXDRXqXkKbwdL7L-8=",
          }
        ]
      },
      {
        "category_name": "Main Courses",
        "items": [
          {
            "item": "Butter Chicken",
            "price": 400,
            "item_image_url": "https://media.istockphoto.com/id/1170729895/photo/indian-butter-chicken-horizontal-photo.jpg?s=2048x2048&w=is&k=20&c=2UGV019EzZ5EWBlGFy7y79IfZ3CJBgox2S3PG4S8FrI=",
          },
          {
            "item": "Dal Makhani",
            "price": 250,
            "item_image_url": "https://media.istockphoto.com/id/1333173580/photo/a-wide-shot-of-dal-makhani-or-daal-makhni-garnished-with-coriander-leaves-and-butter.jpg?s=2048x2048&w=is&k=20&c=QAjpvq_7ChffK9es1rzwuWkM-QJz31RwY1OUAdBWI1c=",
          }
        ]
      },
      {
        "category_name": "Desserts",
        "items": [
          {
            "item": "Rasmalai",
            "price": 100,
            "item_image_url": "https://media.istockphoto.com/id/453303833/photo/trditional-indian-rasmalai-dessert.jpg?s=2048x2048&w=is&k=20&c=NgT_DPO7TFT8mM3uaMY2rBoJ7mDBHH13Ty_iBydsR7Q=",
          },
          {
            "item": "Gulab Jamun",
            "price": 80,
            "item_image_url": "https://media.istockphoto.com/id/521368013/photo/gulab-jamun-1.jpg?s=2048x2048&w=is&k=20&c=25WGjBOfA2EZeGoirzK5cMpoksWn-wz1rcm6ukY2mFA=",
          }
        ]
      }
    ],
    "opening_hours": {
      "monday": "12:00 PM - 9:00 PM",
      "tuesday": "12:00 PM - 9:00 PM",
      "wednesday": "12:00 PM - 9:00 PM",
      "thursday": "12:00 PM - 9:00 PM",
      "friday": "12:00 PM - 10:00 PM",
      "saturday": "1:00 PM - 10:00 PM",
      "sunday": "1:00 PM - 8:00 PM"
    }
  },
  {
    "restaurant_name": "Tandoori Delights",
    "cuisine_type": "Indian",
    "address": {
      "street": "123 Tandoori Lane",
      "city": "Karachi",
      "state": "SD",
      "postal_code": "45678"
    },
    "phone": "555-876-5432",
    "image_url": "https://images.unsplash.com/photo-1618312368656-33f718157750?auto=format&fit=crop&q=80&w=2019&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "menu_categories": [
      {
        "category_name": "Breads",
        "items": [
          {
            "item": "Naan",
            "price": 40,
            "item_image_url": "https://media.istockphoto.com/id/1150376593/photo/bread-tandoori-indian-cuisine.jpg?s=2048x2048&w=is&k=20&c=a_9iG1cj2767aNt6v_sNMYSe-4YkKzp3BeHe9m9NYOA=",
          },
          {
            "item": "Roti",
            "price": 30,
            "item_image_url": "https://media.istockphoto.com/id/1447847096/photo/chapati-also-known-as-roti-rotli-safati-shabaati-phulka-chapo-and-roshi.jpg?s=2048x2048&w=is&k=20&c=FMZYcT7AelSvYr62TOsXovgNWOxiSWq4Bl0JkXrX9i8=",
          }
        ]
      },
      {
        "category_name": "Grilled Delights",
        "items": [
          {
            "item": "Tandoori Chicken",
            "price": 300,
            "item_image_url": "https://media.istockphoto.com/id/995903748/photo/smoked-and-spicy-tandoori-chicken-grilling-with-smoke.jpg?s=2048x2048&w=is&k=20&c=7_jWT0Bo7Nvfgn9IssrnyAH4WMTWao-vLa-v5-fyGHs=",
          },
          {
            "item": "Seekh Kebab",
            "price": 250,
            "item_image_url": "https://media.istockphoto.com/id/501266025/photo/seekh-kabab-5.jpg?s=2048x2048&w=is&k=20&c=XUML0d5CXhsaVXCmifmiHGsHLrFFrbq-TfDa9GyFg-s=",
          }
        ]
      },
      {
        "category_name": "Desserts",
        "items": [
          {
            "item": "Gulab Jamun",
            "price": 80,
            "item_image_url": "https://media.istockphoto.com/id/503178043/photo/gulab-jamun-in-sind.jpg?s=2048x2048&w=is&k=20&c=OF-KFSbDLQxpCxJYq-6WjmXKVaGgK4jvNQ60NdPZkvE=",
          },
          {
            "item": "Kulfi",
            "price": 90,
            "item_image_url": "https://media.istockphoto.com/id/503011705/photo/kulfi.jpg?s=2048x2048&w=is&k=20&c=oFzZnDWdlqL8EYNls3thLkcj9QgsZndBbDqSf2hKsD8=",
          }
        ]
      }
    ],
    "opening_hours": {
      "monday": "12:00 PM - 8:00 PM",
      "tuesday": "12:00 PM - 8:00 PM",
      "wednesday": "12:00 PM - 8:00 PM",
      "thursday": "12:00 PM - 8:00 PM",
      "friday": "12:00 PM - 9:00 PM",
      "saturday": "1:00 PM - 9:00 PM",
      "sunday": "1:00 PM - 7:00 PM"
    }
  },
  {
    "restaurant_name": "Tokyo Sushi Delight",
    "cuisine_type": "Japanese",
    "address": {
      "street": "123 Sushi Avenue",
      "city": "Tokyo",
      "state": "TK",
      "postal_code": "100-1234"
    },
    "phone": "555-555-5555",
    "image_url": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "menu_categories": [
      {
        "category_name": "Sushi Rolls",
        "items": [
          {
            "item": "Rainbow Roll",
            "price": 220,
            "item_image_url": "https://media.istockphoto.com/id/183047783/photo/rainbow-rolls.jpg?s=2048x2048&w=is&k=20&c=kpXF-NhLFa98PV-fwezwmcHhNQ9WRvRLaFgriTVuYak="
          },
          {
            "item": "Dragon Roll",
            "price": 250,
            "item_image_url": "https://media.istockphoto.com/id/587186262/photo/japanese-sushi.jpg?s=2048x2048&w=is&k=20&c=VYDjG7LpkzGhtcMWuFmIZDUhHA3j2V2Szxf_qN_XmRQ="
          }
        ]
      },
      {
        "category_name": "Nigiri Sushi",
        "items": [
          {
            "item": "Salmon Nigiri",
            "price": 180,
            "item_image_url": "https://images.unsplash.com/photo-1648146299011-2322d7ad577c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            "item": "Tuna Nigiri",
            "price": 200,
            "item_image_url": "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
          }
        ]
      },
      {
        "category_name": "Desserts",
        "items": [
          {
            "item": "Mochi Ice Cream",
            "price": 100,
            "item_image_url": "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80&w=1912&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            "item": "Matcha Cheesecake",
            "price": 120,
            "item_image_url": "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      }
    ],
    "opening_hours": {
      "monday": "12:00 PM - 9:00 PM",
      "tuesday": "12:00 PM - 9:00 PM",
      "wednesday": "12:00 PM - 9:00 PM",
      "thursday": "12:00 PM - 9:00 PM",
      "friday": "12:00 PM - 10:00 PM",
      "saturday": "1:00 PM - 10:00 PM",
      "sunday": "1:00 PM - 8:00 PM"
    }
  },
  {

    "restaurant_name": "Romeo's Italian Trattoria",
    "cuisine_type": "Italian",
    "address": {
      "street": "789 Pasta Lane",
      "city": "Rome",
      "state": "RM",
      "postal_code": "00100"
    },
    "phone": "555-321-9876",
    "image_url": "https://images.unsplash.com/photo-1585672840563-f2af2ced55c9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "menu_categories": [
      {
        "category_name": "Antipasti",
        "items": [
          {
            "item": "Bruschetta",
            "price": 150,
            "item_image_url": "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            "item": "Caprese Salad",
            "price": 180,
            "item_image_url": "https://images.unsplash.com/photo-1595587870672-c79b47875c6a?auto=format&fit=crop&q=80&w=1946&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      },
      {
        "category_name": "Pasta",
        "items": [
          {
            "item": "Spaghetti Carbonara",
            "price": 220,
            "item_image_url": "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            "item": "Lasagna",
            "price": 250,
            "item_image_url": "https://plus.unsplash.com/premium_photo-1668618296300-e301f8d2cef9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      },
      {
        "category_name": "Desserts",
        "items": [
          {
            "item": "Tiramisu",
            "price": 120,
            "item_image_url": "https://images.unsplash.com/photo-1611385729502-2b39ea6a357d?auto=format&fit=crop&q=80&w=1949&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            "item": "Panna Cotta",
            "price": 140,
            "item_image_url": "https://images.unsplash.com/photo-1530968313155-63d6a989fc6d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      }
    ],
    "opening_hours": {
      "monday": "11:30 AM - 9:30 PM",
      "tuesday": "11:30 AM - 9:30 PM",
      "wednesday": "11:30 AM - 9:30 PM",
      "thursday": "11:30 AM - 9:30 PM",
      "friday": "11:30 AM - 10:00 PM",
      "saturday": "12:00 PM - 10:00 PM",
      "sunday": "12:00 PM - 8:00 PM"
    }
  },
  {
    "restaurant_name": "Seoul BBQ House",
    "cuisine_type": "Korean",
    "address": {
      "street": "567 BBQ Street",
      "city": "Seoul",
      "state": "SC",
      "postal_code": "04532"
    },
    "phone": "555-789-5678",
    "image_url": "https://images.unsplash.com/photo-1601625618329-caea6f7d6fd6?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "menu_categories": [
      {
        "category_name": "BBQ Specialties",
        "items": [
          {
            "item": "Bulgogi",
            "price": 280,
            "item_image_url": "https://images.unsplash.com/photo-1583032353423-04fd96ef221c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            "item": "Galbi",
            "price": 320,
            "item_image_url": "https://images.unsplash.com/photo-1677029969065-c9f4003a9ad5?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      },
      {
        "category_name": "Rice Bowls",
        "items": [
          {
            "item": "Bibimbap",
            "price": 220,
            "item_image_url": "https://images.unsplash.com/photo-1600289031464-74d374b64991?auto=format&fit=crop&q=80&w=1975&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            "item": "Japchae",
            "price": 200,
            "item_image_url": "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      },
      {
        "category_name": "Desserts",
        "items": [
          {
            "item": "Patbingsu",
            "price": 90,
            "item_image_url": "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            "item": "Tteokbokki",
            "price": 100,
            "item_image_url": "https://images.unsplash.com/photo-1679581083578-94eae6e8d7a4?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      }
    ],
    "opening_hours": {
      "monday": "11:00 AM - 9:00 PM",
      "tuesday": "11:00 AM - 9:00 PM",
      "wednesday": "11:00 AM - 9:00 PM",
      "thursday": "11:00 AM - 9:00 PM",
      "friday": "11:00 AM - 10:00 PM",
      "saturday": "12:00 PM - 10:00 PM",
      "sunday": "12:00 PM - 8:00 PM"
    }
  },

  {
    "restaurant_name": "Mediterranean Delights",
    "cuisine_type": "Mediterranean",
    "address": {
      "street": "789 Olive Avenue",
      "city": "Athens",
      "state": "AT",
      "postal_code": "10100"
    },
    "phone": "555-111-9999",
    "image_url": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "menu_categories": [
      {
        "category_name": "Appetizers",
        "items": [
          {
            "item": "Hummus",
            "price": 120,
            "item_image_url": "https://images.unsplash.com/photo-1637949385162-e416fb15b2ce?auto=format&fit=crop&q=80&w=2052&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            "item": "Falafel",
            "price": 150,
            "item_image_url": "https://images.unsplash.com/photo-1593001874117-c99c800e3eb8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      },
      {
        "category_name": "Main Courses",
        "items": [
          {
            "item": "Shawarma Plate",
            "price": 250,
            "item_image_url": "https://images.unsplash.com/photo-1542444256-164bd32f11fc?auto=format&fit=crop&q=80&w=2010&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            "item": "Moussaka",
            "price": 220,
            "item_image_url": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&q=80&w=1954&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      },
      {
        "category_name": "Desserts",
        "items": [
          {
            "item": "Baklava",
            "price": 100,
            "item_image_url": "https://images.unsplash.com/photo-1640040520679-2ace58742f22?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            "item": "Knafeh",
            "price": 120,
            "item_image_url": "https://images.unsplash.com/photo-1617806501736-fc7cab7c05bf?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      }
    ],
    "opening_hours": {
      "monday": "12:00 PM - 9:00 PM",
      "tuesday": "12:00 PM - 9:00 PM",
      "wednesday": "12:00 PM - 9:00 PM",
      "thursday": "12:00 PM - 9:00 PM",
      "friday": "12:00 PM - 10:00 PM",
      "saturday": "1:00 PM - 10:00 PM",
      "sunday": "1:00 PM - 8:00 PM"
    }
  },
  {
    "restaurant_name": "Parisian Cafe",
    "cuisine_type": "French",
    "address": {
      "street": "456 French Street",
      "city": "Paris",
      "state": "FR",
      "postal_code": "75001"
    },
    "phone": "555-678-4321",
    "image_url": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "menu_categories": [
      {
        "category_name": "Appetizers",
        "items": [
          {
            "item": "Escargot",
            "price": 180,
            "item_image_url": "https://images.unsplash.com/photo-1524391931851-7bdd18f138c3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            "item": "French Onion Soup",
            "price": 160,
            "item_image_url": "https://images.unsplash.com/photo-1549203438-a7696aed4dac?auto=format&fit=crop&q=80&w=1946&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      },
      {
        "category_name": "Main Courses",
        "items": [
          {
            "item": "Coq au Vin",
            "price": 320,
            "item_image_url": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            "item": "Beef Bourguignon",
            "price": 340,
            "item_image_url": "https://images.unsplash.com/photo-1668724776334-548671c13751?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      },
      {
        "category_name": "Desserts",
        "items": [
          {
            "item": "Creme Brulee",
            "price": 120,
            "item_image_url": "https://plus.unsplash.com/premium_photo-1667808384851-8f041275a8c2?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            "item": "Tarte Tatin",
            "price": 140,
            "item_image_url": "https://images.unsplash.com/photo-1615595207177-42a3ba5367c6?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      }
    ],
    "opening_hours": {
      "monday": "11:30 AM - 9:30 PM",
      "tuesday": "11:30 AM - 9:30 PM",
      "wednesday": "11:30 AM - 9:30 PM",
      "thursday": "11:30 AM - 9:30 PM",
      "friday": "11:30 AM - 10:00 PM",
      "saturday": "12:00 PM - 10:00 PM",
      "sunday": "12:00 PM - 8:00 PM"
    }
  }

  // Add more restaurants following the same structure
]


function postRestaurants() {
  try {
    for (var i = 0; i < restro_data.length; i++) {
      addDoc(collection(db, "restaurants"), restro_data[i])
    }
  } catch (e) {
    alert(e.message)
  }

}

async function getRestaurant() {
  const querySnapshot = await getDocs(collection(db, "restaurants"));

  const data = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    const item = doc.data();
    item.id = doc.id
    console.log("item", item)
    data.push(item)
  });

  return data;

}

async function getSingleRestaurant(id) {

  const docRef = doc(db, "restaurants", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data()
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

}

export { register, login, Facebook, postRestaurants, getRestaurant, getSingleRestaurant }








