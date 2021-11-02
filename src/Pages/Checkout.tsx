import React from "react"

// @ts-expect-error
import { AvForm, AvField } from "availity-reactstrap-validation"

import { Container, Button } from "reactstrap"
import { useAppSelector } from "../Redux/hooks/hooks"
import _ from "lodash"

interface CheckoutProps {}

interface IFormValues {
  first_name: string
  last_name: string
  city: string
  zip_code: string
}

const Checkout: React.FunctionComponent<CheckoutProps> = (props) => {
  const cartContent = useAppSelector((state) => state.cartContent)

  const result = _.countBy(cartContent, "id")

  const bookIds = Object.keys(result)
  const cartOrder = bookIds.map((el) => ({ id: el, quantity: result[el] }))

  const handleValidSubmit = async (event: any, values: IFormValues) => {
    try {
      await fetch("http://localhost:3001/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order: cartOrder,
          first_name: values.first_name,
          last_name: values.last_name,
          city: values.city,
          zip_code: values.zip_code,
        }),
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className="checkout-container">
      <h2>Checkout</h2>
      <AvForm onValidSubmit={handleValidSubmit}>
        <AvField
          name="first_name"
          label="Your name"
          type="text"
          validate={{
            required: {
              value: true,
              errorMessage: "Please enter your name",
            },
            pattern: {
              value: "/^[a-z ,.'-]+$/i",
              errorMessage:
                "Your name must be composed only with letter and numbers",
            },
            minLength: {
              value: 4,
              errorMessage: "Your name must be between 4 and 16 characters",
            },
            maxLength: {
              value: 16,
              errorMessage: "Your name must be between 4 and 16 characters",
            },
          }}
        />
        <AvField
          name="last_name"
          label="Your last name"
          type="text"
          validate={{
            required: {
              value: true,
              errorMessage: "Please enter your last name",
            },
            pattern: {
              value: "/^[a-z ,.'-]+$/i",
              errorMessage:
                "Your last name must be composed only with letter and numbers",
            },
            minLength: {
              value: 4,
              errorMessage:
                "Your last name must be between 4 and 16 characters",
            },
            maxLength: {
              value: 16,
              errorMessage:
                "Your last name must be between 4 and 16 characters",
            },
          }}
        />
        <AvField
          name="email"
          label="Email"
          type="text"
          validate={{
            required: {
              value: true,
              errorMessage:
                "Your email must be in the following format: example@example.com",
            },
            email: true,
          }}
        />
        <AvField
          name="city"
          label="City"
          type="text"
          validate={{
            required: { value: true, errorMessage: "Please enter a city" },
            pattern: {
              value: "/^[a-z ,.'-]+$/i",
              errorMessage:
                "The name of the city must be composed only with letters",
            },
            minLength: {
              value: 4,
              errorMessage:
                "The name of the city must be between 4 and 16 characters",
            },
            maxLength: {
              value: 16,
              errorMessage:
                "The name of the city must be between 4 and 16 characters",
            },
          }}
        />
        <AvField
          name="zip_code"
          label="Zip code"
          type="string"
          validate={{
            required: {
              value: true,
              errorMessage: "Please enter your zip code",
            },
            pattern: {
              value: "/\\d{2}-\\d{3}/",
              errorMessage: "Your zip code must be in this format: xx-xxx",
            },
            minLength: {
              value: 6,
              errorMessage: "Your zip code must be in this format: xx-xxx",
            },
            maxLength: {
              value: 6,
              errorMessage: "Your zip code must be in this format: xx-xxx",
            },
          }}
        />
        <Button color="primary">Submit</Button>
      </AvForm>
    </Container>
  )
}

export default Checkout
