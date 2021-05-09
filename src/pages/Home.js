import { useState } from 'react'
import LearnerDetails from '../components/LearnerDetails'

function Home() {
  let [selectedUser, setSelectedUser] = useState(null)

  const learners = [
    {
      id: 1,
      firstname: "Laurent",
      lastname: "Mazouin",
      email: "laurent.mazouin@email.com",
      score: 8,
    },
    {
      id: 2,
      firstname: "Godefroy",
      lastname: "Diakite",
      email: "godefroy.diakite@email.com",
      score: 10,
    },
    {
      id: 3,
      firstname: "Alizée",
      lastname: "Vasseur",
      email: "alizee.vasseur@email.com",
      score: 7,
    },
  ]

  const averageScore = (learners.reduce((accumulator, learner) => {
    return accumulator + learner.score
  }, 0) / learners.length).toPrecision(3)

  return (
    <main>
      <h1>List of learners</h1>
      <p>Average learner score: {averageScore}</p>
      <ul>
        {
          learners.map(learner => 
            <li
              onClick={() => {setSelectedUser(learner.id)}}
              key={learner.id}
            >
              <span>{learner.firstname}</span>
              {selectedUser === learner.id && <LearnerDetails learner={learner} />}
            </li>
          )
        }
      </ul>
    </main>
  );
}

export default Home;
