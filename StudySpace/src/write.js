import React, {useState} from 'react';
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

function write() { 
    let[inputvalue1, setInputValue1] = useState("");
    let[inputvalue2, setInputValue2] = useState("");
    let[inputvalue3, setInputValue3] = useState("");
    let[inputvalue4, setInputValue4] = useState("");


    const saveData = async() => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db,"userspace/user"));
        set(newDocRef, {
            SubName: inputvalue1,
            NumberOfpep: inputvalue2,
            time: inputvalue3,
            campus: inputvalue4, 
            }).then( () => {
                alert("data saved")

            }).catch((error) => {
                alert("error")
            })

        

        }
    }
    