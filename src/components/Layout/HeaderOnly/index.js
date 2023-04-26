import Header from "~/components/Layout/components/Header";

// do content thay đổi thì chúng ta phải nhận từ ngoài vào dưới dạng chidlren
function HeaderOnly({ children }) {
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

export default HeaderOnly;