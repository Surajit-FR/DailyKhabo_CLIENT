export const addEditAddressInputConfigs = [
    { name: 'address', label: 'Address', placeholder: 'Address', type: 'text', colSize: 'col-md-12' },
    { name: 'apartment', label: 'Apartment', placeholder: 'Apartment, suite, etc. (optional)', type: 'text', colSize: 'col-md-12' },
    { name: 'phone', label: 'Phone', placeholder: 'Phone number', type: 'text', colSize: 'col-md-6', maxLength: 10 },
    { name: 'country', label: 'Country', placeholder: 'Country', type: 'text', colSize: 'col-md-6', readOnly: true },
    { name: 'state', label: 'State', placeholder: 'State', type: 'text', colSize: 'col-md-6' },
    { name: 'city', label: 'City', placeholder: 'City', type: 'text', colSize: 'col-md-6' },
    { name: 'postalCode', label: 'Postal code', placeholder: 'Postal Code', type: 'text', colSize: 'col-md-6', maxLength: 6 },
];
