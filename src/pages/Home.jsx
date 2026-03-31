import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  	const {store, dispatch} =useGlobalReducer()
	
	useEffect(() =>{
		const url = "https://playground.4geeks.com/contact/agendas/kristofer";
		fetch(url).then((response) => {
			if(response.ok){
				return response.json();
			}
			else{
				alert("check if user exists");
			}
		}).then((body) => {
			const contacts = body.contacts;
			dispatch({
				type: "update_contacts_list",
				payload: contacts
			});
		});

	}, []);

	return (
		<div className="text-center mt-5">
		
			<ul>
				{store.contacts.map((contact)=> {
					return <li key={contact.id}>{contact.name}</li>;
				})}
			</ul>
		</div>
	);
}; 