import React from "react";
import StarUsButton from "../components/StarUsButton";

const StarUsMessageDialog = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    let timer;
    if (!localStorage.getItem("landing_docs")) {
      timer = setTimeout(() => {
        setOpen(true);
      }, 16 * 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("landing_docs", true);
  };

  const handleClickStarUsButton = () => {
    window.gtag("event", "click_github", {
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
    window.open("https://github.com/NucleoidAI/Nucleoid", "_blank");
  };

  if (!open) {
    return null;
  } else {
    return (
      <div
        style={{
          position: "fixed",
          right: 0,
          bottom: 0,
          maxWidth: 450,
          margin: 15,
          userSelect: "none",
          color: "black",
          backgroundColor: "#f5f5f9",
          boxShadow: "1px 2px 3px 1px #aaaaaa",
          borderRadius: 5,
        }}
      >
        <div
          style={{
            height: "44px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              paddingLeft: 2,
              fontSize: "1rem",
              fontWeight: "bold",
              minWidth: "36px",
            }}
          ></span>
          <StarUsButton onClick={handleClickStarUsButton} />
          <span
            onClick={handleClose}
            style={{
              marginRight: "15px",
              fontSize: 25,
              transform: "rotate(45deg)",
              cursor: "pointer",
            }}
          >
            +
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
        >
          <span style={{ fontSize: 14 }}>
            &emsp;Thanks to declarative programming, we have a brand-new
            approach to data and logic. As we are still discovering what we can
            do with this powerful programming model, please join us with any
            types of contribution!
          </span>
          <img
            src={"https://cdn.nucleoid.com/media/nobel.png"}
            alt={"Nobel"}
            width={65}
            height={65}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "25px",
          }}
        ></div>
      </div>
    );
  }
};

export default StarUsMessageDialog;
