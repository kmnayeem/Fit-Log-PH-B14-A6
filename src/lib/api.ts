export const getAllWorks = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json();
};

export const getSingleWorks = async (id: string) => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
        cache: 'no-store',
    });

    if (res.status === 404) {
        return null;
    }

    if (!res.ok) {
        throw new Error('Failed to fetch workout');
    }

    const work = await res.json();

    if (!work || !work.name) {
        return null;
    }

    return work;
};
