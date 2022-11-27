import { useState } from "react"
import { FormRow, Alert, FormRowSelect } from "../../components"
import { useAppContext } from "../../context/appContext"
import Wrapper from "../../assets/wrappers/DashboardFormPage"


const AddJobs = () => {
	const { showAlert,
		displayAlert,
		isEditing,
		position,
		company,
		jobLocation,
		jobType,
		jobTypeOptions,
		status,
		statusOptions,
		handleChange,
		clearValues,
		isLoading,
		createJob,
		editJob,
		deleteJob
	} = useAppContext()

	const handleSubmit = (e) => {
		e.preventDefault()
		/*if (!position || !company || !jobLocation) {
			displayAlert()
			
			return
		}*/
		if(isEditing){
			editJob()
			return
		}
		
		createJob()

	}
	const handleJobInput = (e) => {
		const name = e.target.name
		const value = e.target.value
		handleChange({ name, value })

	}
	return (
		<Wrapper>
			<form className="form">
				<h3>{isEditing ? 'edit job' : 'add job'}</h3>
				{showAlert && <Alert />}
				<div className="form-center">
					<FormRow type="text" name="position"
						value={position}
						handleChange={handleJobInput} />
					<FormRow type="text" name="company"
						value={company}
						handleChange={handleJobInput} />
					<FormRow type="text"
						name="jobLocation"
						value={jobLocation}
						labelText='job location'
						handleChange={handleJobInput} />
					<FormRowSelect
						name='status'
						value={status}
						handleChange={handleJobInput}
						list={statusOptions}
					/>
					<FormRowSelect
						name='jobType'
						labelText='job type'
						value={jobType}
						handleChange={handleJobInput}
						list={jobTypeOptions}
					/>


					{/* job type */}
					<div className="btn-container">
						<button type='submit'
							className="btn btn-block submit-btn"
							onClick={handleSubmit}
							disabled={isLoading}
						>
							Submit
						</button>
						<button
							className="btn btn-block clear-btn"
							onClick={(e) => {
								e.preventDefault()
								clearValues()
							}}
						>
							Clear
						</button>
					</div>
				</div>
			</form>
		</Wrapper>
	)
}

export default AddJobs