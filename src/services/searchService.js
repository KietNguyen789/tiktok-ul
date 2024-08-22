import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        // luon thuc hien await tu tren xuong duoi truoc
        const res = await httpRequest.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        // res.data.data
        //console.log(res);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
