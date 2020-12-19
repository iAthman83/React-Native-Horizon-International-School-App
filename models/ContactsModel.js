class ContactModel {
  constructor(
    id,
    salutation,
    firstName,
    lastName,
    position,
    phoneNumber,
    email,
    imageUrl
  ) {
    this.id = id;
    this.salutation = salutation;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.imageUrl = imageUrl;
  }
}

export default ContactModel;
