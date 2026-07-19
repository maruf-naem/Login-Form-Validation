import { useActionState } from "react"

const Registration = () => {


    async function submisionHendling(preData, formData) {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000)
        })
        let phoneTest = /^\+[1-9]\d{1,14}$/
        let firstname = formData.get("firstName")
        let lastname = formData.get("lastName")
        let date = formData.get("dob")
        let phone = formData.get("phone")
        console.log(firstname, lastname, date);
        if (!phone || !phoneTest.test(phone)) {
            return {
                error: "the number is not correct!"
            }
        } else {
            return {
                success: "Your registration successfull"
            }

        }

    }

    const [data, action, pending] = useActionState(submisionHendling)

    console.log(data)




    return (
        <div className="registrationForm">
            <h1>Student Registration Form </h1>
            <hr />
            <form action={action}>

                {/* Student Name */}
                <div>
                    <label>Student Name</label>
                    <div>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="First"
                        />

                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last"
                        />
                    </div>
                </div>

                {/* Date of Birth */}
                <div>
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                    />
                </div>

                {/* Gender */}
                <fieldset>
                    <legend>Gender</legend>

                    <label htmlFor="male">
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="Male"
                        />
                        Male
                    </label>

                    <label htmlFor="female">
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="Female"
                        />
                        Female
                    </label>
                </fieldset>

                {/* Address */}
                <div >
                    <label htmlFor="street1">Address</label>

                    <input
                        type="text"
                        id="street1"
                        name="street1"
                        placeholder="Street Address"
                    />

                    <input
                        type="text"
                        id="street2"
                        name="street2"
                        placeholder="Street Address Line 2"
                    />

                    <div>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="City"
                        />

                        <input
                            type="text"
                            id="region"
                            name="region"
                            placeholder="Region"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            id="zip"
                            name="zip"
                            placeholder="Postal / Zip Code"
                        />

                        <select id="country" name="country">
                            <option value="">Select Country</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="India">India</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Nepal">Nepal</option>
                        </select>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+880 17XXXXXXXX"
                        />
                    </div>
                </div>

                {/* Submit */}
                <button type="submit">
                    {pending ? "Submiting..." : "Register"}
                </button>
                {
                    data?.error && <h5>{data.error}</h5>
                }
                {
                    data?.success && <h5>{data.success}</h5>
                }

            </form>
        </div>
    )
}

export default Registration 