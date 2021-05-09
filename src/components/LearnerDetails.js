export default function LearnerDetails(props) {
	return (
		<section>
			<ul>
				<li>Firstname: {props.learner.firstname}</li>
				<li>Lastname: {props.learner.lastname}</li>
				<li>Email: {props.learner.email}</li>
				<li>Score: {props.learner.score}</li>
			</ul>
			<button>Update</button>
		</section>
	)
}