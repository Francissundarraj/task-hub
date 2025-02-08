import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import auth from "../Config";

function ProtectedRoute({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setUser(authUser);
            setLoading(false);
        });
        return () => unsubscribe(); // Cleanup the listener on unmount
    }, []);

    if (loading) return <div>Loading...</div>; // Prevent unnecessary redirects before checking auth state

    return user ? (children ? children : <Outlet />) : <Navigate to="/login" />;
}

export default ProtectedRoute;
