import Header from "./Header";

// do content thay đổi thì chúng ta phải nhận từ ngoài vào dưới dạng chidlren
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;