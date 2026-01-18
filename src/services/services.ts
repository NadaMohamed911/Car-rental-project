const BASE_URL = "https://demo.tourcode.online/api";

export interface AddCarPayload {
    name: string;
    brand: string;
    model: string;
    description: string;
    image: string;
    price_per_day: number;
    location: string;
    year: number;


}

export const addCar = async (payload: AddCarPayload) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${BASE_URL}/cars`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
        throw data;
    }

    return data;
};