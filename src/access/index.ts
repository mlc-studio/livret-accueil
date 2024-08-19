export const isAdmin = ({ req: { user } }: any) => user?.role === 'admin';

export const isHost = ({ req: { user } }: any) => user?.role === 'host';

export const isAdminOrHimself = ({ req: { user } }: any) => {
    if (user?.role === 'admin') return true;

    if (user?.role === 'host') {
        return {
            id: {
                equals: user.id,
            }
        };
    }

    return false;
}