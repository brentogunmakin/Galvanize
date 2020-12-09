import React from 'react';
import {Component} from 'react';
import styled from 'styled-components';

const RegisterPage = styled.div`
	display:             flex;
	justify-content:     space-between;
`;

const SkillTitle = styled.div`
	font-size: 5vw;
`;

const SubmitForm = styled.form`
	display: ${props => props.submitDisplay};
`;

const SaveForm = styled.form`
	display: ${props => props.saveDisplay};
`;


const Tendies = styled.div`
	text-align: center;
`;

const FlexBot = styled.div`
	display:        flex;
	flex-direction: column;
`;

const PeopleButtons = styled.button`
	margin: 0;
	border: none;
`;

export default class DeleteLater extends Component {
	constructor() {
		super();
		this.state = {
			error: null,
			isLoaded: false,
			data: [],
			regData: {
				fName: "",
				lName: "",
				eMail: "",
				sSize: "S",
				sLevel: "beginner",
			},
			saveData: {
				id: "",
				fName: "",
				lName: "",
				eMail: "",
				sSize: "",
				sLevel: "",
			},
			sentRequests: [],
			style: {
				SaveForm:   "none",
				SubmitForm: "block",
			},
		}
		this.name = "";
	}
	
	componentDidMount() {
		fetch("http://localhost:3000/attendees")
			.then(response => response.json())
			.then(myJson => {
				this.setState({
					isLoaded: true,
					data: myJson,
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		)
	}
	
	Register() {
		let registrant = {
			'id':         null,
			'firstName':  this.state.fName,
			'lastName':   this.state.lName,
			'email':      this.state.eMail,
			'shirt':      this.state.sSize,
			'skillLevel': this.state.sLevel,
		}
		
		fetch('http://localhost:3000/attendees', {
				method: 'POST',
				body: JSON.stringify(registrant),
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				}
			}
		).then(
			//this.state.sentRequests.remove(registrant);
		)
	}
	
	UpdateData() {
		let registrant = {
			'id':         this.state.saveData.id,
			'firstName':  this.state.saveData.fName,
			'lastName':   this.state.saveData.lName,
			'email':      this.state.saveData.eMail,
			'shirt':      this.state.saveData.sSize,
			'skillLevel': this.state.saveData.sLevel,
		}
		
		fetch(('http://localhost:3000/attendees/' + registrant.id), {
				method: 'PUT',
				body: JSON.stringify(registrant),
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				}
			}
		)
	}
	
	handleChange = (evt) => {
		this.setState({[evt.target.name]: evt.target.value});
	}
	
	handleSaveChange = (evt) => {
		this.setState({saveData: {...this.state.saveData, [evt.target.name]: evt.target.value}});
	}
	
	changeSaveData = (evt) => {
		let pData = this.state.data.filter(i => 
			i.id === evt.target.value
		)[0];
		
		if (this.state.style.SaveForm === "none") {
			this.setState({
				saveData: {
					id:     pData.id,
					fName:  pData.firstName,
					lName:  pData.lastName,
					eMail:  pData.email,
					sSize:  pData.shirt,
					sLevel: pData.skillLevel,
				},
				style: {
					SaveForm:   "block",
					SubmitForm: "none",
				},
			});
			
		} else {
			this.setState({style: {
					SaveForm:   "none",
					SubmitForm: "block",
				},
			});
		}
	}
	
	getLevels() {
		let levels = [];
		this.state.data.forEach(i => {
			if (!(levels.includes(i.skillLevel))) {
				levels.push(i.skillLevel);
			}
		});
		return levels;
	}

	render() {
		const {regData, style, saveData} = this.state;
		
		if (this.state.error) {
			console.log("Error!");
			return <div key="Error">Error: {this.state.error.message}</div>;
		} else if (!this.state.isLoaded) {
			console.log("Loading...");
			return <div key="Loading">Loading...</div>;
		} else {
			let levels = this.getLevels();
			return (
				<RegisterPage>
					<SubmitForm submitDisplay={style.SubmitForm}>
						<div>First Name:</div><input name="fName" value={regData.fName} onChange={this.handleChange} type="text"></input>
						
						<div>Last Name :</div><input name="lName" value={regData.lName} onChange={this.handleChange} type="text"></input>
						
						<div>Email     :</div><input name="eMail" value={regData.eMail} onChange={this.handleChange} type="email"></input>
						
						<select name="sSize" value={regData.sSize} onChange={this.handleChange}>
							<option value="S">S</option>
							<option value="M">M</option>
							<option value="L">L</option>
						</select>
						
						<select name="sLevel" value={regData.sLevel} onChange={this.handleChange}>
							<option value="beginner">Beginner</option>
							<option value="intermediate">Intermediate</option>
							<option value="expert">Expert</option>
						</select>
						
						<button key="submitButton" onClick={() => this.Register()}>Register</button>
					</SubmitForm>
					<SaveForm saveDisplay={style.SaveForm}>
						<div>First Name:</div><input name="fName" value={saveData.fName} onChange={this.handleSaveChange} type="text" placeholder={saveData.fName}></input>
						
						<div>Last Name :</div><input name="lName" value={saveData.lName} onChange={this.handleSaveChange} type="text" placeholder={saveData.lName}></input>
						
						<div>Email     :</div><input name="eMail" value={saveData.eMail} onChange={this.handleSaveChange} type="email" placeholder={saveData.eMail}></input>
						
						<select name="sSize" value={regData.sSize} onChange={this.handleChange}>
							<option value="S">S</option>
							<option value="M">M</option>
							<option value="L">L</option>
						</select>
						
						<select name="sLevel" value={this.state.sLevel} onChange={this.handleChange}>
							<option value="beginner">Beginner</option>
							<option value="intermediate">Intermediate</option>
							<option value="expert">Expert</option>
						</select>
						
						<button key="discC" onClick={() => {console.log("discarded data")}}>Discard Changes</button>
						<button key="saveC" onClick={() => this.UpdateData()}>Save Changes</button>
					</SaveForm>
					<div>
						{
							levels.map(j => {
								return (
									<Tendies key={j}>
										<br />
										<SkillTitle>{j.toUpperCase()}</SkillTitle>
										<FlexBot>
										{
											this.state.data
												.filter(i => i.skillLevel === j)
												.map(i => {
													return (
														<PeopleButtons onClick={this.changeSaveData} value={i.id} key={i.id}>{i.firstName} {i.lastName}</PeopleButtons>
													)
												}
											)
										}
										</FlexBot>
									</Tendies>
								)
							})
						}
					</div>
				</RegisterPage>
			);
		}
	}
}
