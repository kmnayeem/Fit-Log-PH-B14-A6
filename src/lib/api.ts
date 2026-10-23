export const getAllWorks = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json();
};

export const getSingleWorks = async (id : string) => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    return res.json();
};