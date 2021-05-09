import { useState } from "react";
import { useFirestore } from 'reactfire'
import { useHistory } from "react-router-dom";

const AddLearner = () => {
	const collectionRef = useFirestore().collection('learners')
	const history = useHistory();
	const [firstname, setFirstname] = useState("")
	const [lastname, setLastname] = useState("")
	const [email, setEmail] = useState("")
	const [score, setScore] = useState("")
	
	const onSubmitHandler = (event) => {
		event.preventDefault()
		collectionRef.doc().set({
			firstname,
			lastname,
			email,
			score,
		}).then(() => {
			history.push('/')
		})
	}


	return (
		<main>
			<form onSubmit={onSubmitHandler}>
				<p>Add Learner</p>
				<label htmlFor="firstname">firstname</label>
				<input type="text" id="firstname" name="firstname" value={firstname} onChange={e => setFirstname(e.target.value)} required />
				<label htmlFor="lastname">lastname</label>
				<input type="text" id="lastname" name="lastname" required value={lastname} onChange={e => setLastname(e.target.value)} />
				<label htmlFor="email">email</label>
				<input type="email" id="email" name="email" required value={email} onChange={e => setEmail(e.target.value)} />
				<label htmlFor="score">score</label>
				<input type="number" min="0" max="10" id="score" name="score" required value={score} onChange={e => setScore(e.target.value)} />
				<button type="submit">Submit</button>
			</form>
		</main>
	)
}

export default AddLearner