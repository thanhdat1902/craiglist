import { useState } from "react";
import LeftPanelFilter from "./components/leftPanel";
import MainContent from "./components/mainContent";

import "./App.css";

function App() {
  const [isOneBedroom, setIsOneBedroom] = useState(false);
  const [isTwoBedroom, setIsTwoBedroom] = useState(false);
  const [isFurnished, setIsFurnished] = useState(false);
  const [isPetFriendly, setIsPetFriendly] = useState(false);

  return (
    <div>
      <div className="AppContent">
        <LeftPanelFilter
          isOneBedroom={isOneBedroom}
          setIsOneBedroom={setIsOneBedroom}
          isTwoBedroom={isTwoBedroom}
          setIsTwoBedroom={setIsTwoBedroom}
          isFurnished={isFurnished}
          setIsFurnished={setIsFurnished}
          isPetFriendly={isPetFriendly}
          setIsPetFriendly={setIsPetFriendly}
        />
        <MainContent
          isOneBedroom={isOneBedroom}
          setIsOneBedroom={setIsOneBedroom}
          isTwoBedroom={isTwoBedroom}
          setIsTwoBedroom={setIsTwoBedroom}
          isFurnished={isFurnished}
          setIsFurnished={setIsFurnished}
          isPetFriendly={isPetFriendly}
          setIsPetFriendly={setIsPetFriendly}
        />
      </div>
    </div>
  );
}

export default App;
