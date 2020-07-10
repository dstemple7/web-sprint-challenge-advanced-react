import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />)
  
  const formHeader = screen.getByText(/form/i)
  
  expect(formHeader).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
  // render app
  const {getByLabelText, queryByPlaceholderText, getByTestId} = render(<CheckoutForm />)

  //query the form inputs
  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const addressInput = getByLabelText(/address/i);
  const cityInput = getByLabelText(/city/i);
  const stateInput = getByLabelText(/state/i);
  const zipInput = getByLabelText(/zip/i);

  //fireEvent fills in the inputs
  fireEvent.change(firstNameInput, {
    target: { name: "firstName", value: "David" }
  });
  fireEvent.change(lastNameInput, {
    target: { name: "lastName", value: "Temple" }
  });
  fireEvent.change(addressInput, {
    target: { name: "address", value: "4203 W Lierly Lane" }
  });
  fireEvent.change(cityInput, {
    target: { name: "city", value: "Fayetteville" }
  });
  fireEvent.change(stateInput, {
    target: { name: "state", value: "Arkansas" }
  });
  fireEvent.change(zipInput, {
    target: { name: "zip", value: "72704" }
  });

  //query for & submit form
  const checkoutButton = screen.getByRole('button', {name: /checkout/i});
  fireEvent.click(checkoutButton);

  //make sure success message & form details are in the success message
  expect(getByTestId('successMessage')).toHaveTextContent(/woo/i)
  expect(getByTestId('successMessage')).toHaveTextContent('David')
  expect(getByTestId('successMessage')).toHaveTextContent('Temple')
  expect(getByTestId('successMessage')).toHaveTextContent('4203 W Lierly Lane')
  expect(getByTestId('successMessage')).toHaveTextContent('Fayetteville')
  expect(getByTestId('successMessage')).toHaveTextContent('Arkansas')
  expect(getByTestId('successMessage')).toHaveTextContent('72704')

});
