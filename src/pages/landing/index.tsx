import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing(): React.ReactElement {
	return (
		<>
			<h1>
				Hola hermanos, este es un cuestionario sobre la Torah y vamos a proceder a
				realizarlo
			</h1>
			<Link to={'/cuestionarie'}>Empezar</Link>
		</>
	)
}
