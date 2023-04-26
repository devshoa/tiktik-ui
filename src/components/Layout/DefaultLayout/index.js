import Header from "./Header";
import Sidebar from "./Sidebar";

// do content thay đổi thì chúng ta phải nhận từ ngoài vào dưới dạng chidlren
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;