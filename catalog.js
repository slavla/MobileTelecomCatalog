// catalog.js
export function getCatalog(customerType) {
    const baseCatalog = [
        { id: 1, name: "Unlimited Data", description: "Unlimited internet access", residentialPrice: 50 },
        { id: 2, name: "Family Plans", description: "Shared plans for multiple users", residentialPrice: 40 },
        { id: 3, name: "5G Access", description: "Access to 5G networks", residentialPrice: 15 },
        { id: 4, name: "Mobile Hotspot", description: "Use mobile data to create a Wi-Fi hotspot", residentialPrice: 10 },
        { id: 5, name: "International Roaming", description: "Mobile services while traveling abroad", residentialPrice: 20 },
        { id: 6, name: "Voicemail", description: "Voice message services", residentialPrice: 3 },
        { id: 7, name: "Caller ID", description: "Display caller information", residentialPrice: 2 },
        { id: 8, name: "Call Forwarding", description: "Redirect incoming calls to another number", residentialPrice: 2 },
        { id: 9, name: "Call Waiting", description: "Notify of incoming calls during another call", residentialPrice: 1 },
        { id: 10, name: "Conference Calling", description: "Multiple participants in a call", residentialPrice: 5 },
        { id: 11, name: "Parental Controls", description: "Restrict and monitor usage for children", residentialPrice: 3 },
        { id: 12, name: "Mobile Insurance", description: "Insurance for mobile devices", residentialPrice: 7 },
        { id: 13, name: "Streaming Services", description: "Access to streaming services", residentialPrice: 12 },
        { id: 14, name: "Second Number", description: "Two numbers, one phone", residentialPrice: 10 },
        { id: 15, name: "Connected Devices", description: "Unlimited monthly data for devices", residentialPrice: 15 },
        { id: 16, name: "Device Protection", description: "Protection plan for devices", residentialPrice: 8 }
    ];

    // Calculate Business and Partner prices
    baseCatalog.forEach(service => {
        service.businessPrice = parseFloat((service.residentialPrice * 0.8).toFixed(2)); // Business is 20% off
        service.partnerPrice = parseFloat((service.residentialPrice * 0.7).toFixed(2));  // Partner is 30% off
    });

    // Return catalog with appropriate pricing
    return baseCatalog.map(service => ({
        ...service,
        price: parseFloat((customerType === 'Business' ? service.businessPrice :
               customerType === 'Partner' ? service.partnerPrice :
               service.residentialPrice).toFixed(2))
    }));
}

