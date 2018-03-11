import * as React from "react";

interface PetCardProps {

}

interface PetCardState {

}

export class PetCard extends React.Component<PetCardProps, PetCardState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cards">
                <a className="card" href="#">
			<span className="card-header">
				<span className="card-title">
					<h3>В поисках дома и новых мам-пап! </h3>
				</span>
			</span>
                    <span className="card-summary">
				Предыдущие хозяева так и не найдены, хотя малышка была чистая, в ошейнике, видно что домашняя.
			</span>
                    <span className="card-meta">
				Published: June 18th, 2018
			</span>
                </a>

                <a className="card" href="#">
			<span className="card-header">
				<span className="card-title">
					<h3>В поисках дома и новых мам-пап! </h3>
				</span>
			</span>
                    <span className="card-summary">
				Предыдущие хозяева так и не найдены, хотя малышка была чистая, в ошейнике, видно что домашняя.
			</span>
                    <span className="card-meta">
				Published: June 18th, 2018
			</span>
                </a>

                <a className="card" href="#">
			<span className="card-header">
				<span className="card-title">
					<h3>В поисках дома и новых мам-пап! </h3>
				</span>
			</span>
                    <span className="card-summary">
				Предыдущие хозяева так и не найдены, хотя малышка была чистая, в ошейнике, видно что домашняя.
			</span>
                    <span className="card-meta">
				Published: June 18th, 2018
			</span>
                </a>
            </div>
        );
    }
}