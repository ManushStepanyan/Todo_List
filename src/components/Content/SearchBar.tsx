import { memo, useCallback, useMemo } from "react";
import { SearchBarProps } from "../../types";
import useStyles from "./styles";

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  isDoneButtonPressed,
  isImportantButtonPressed,
  setIsDoneButtonPressed,
  setIsImportantButtonPressed,
}) => {
  const classes = useStyles();

  const handleDoneButton = useCallback(() => {
    setIsDoneButtonPressed(!isDoneButtonPressed);
    setIsImportantButtonPressed(false);
  }, [isDoneButtonPressed]);

  const handleImportantButton = useCallback(() => {
    setIsImportantButtonPressed(!isImportantButtonPressed);
    setIsDoneButtonPressed(false);
  }, [isImportantButtonPressed]);

  const handleAllButton = useCallback(() => {
    setIsImportantButtonPressed(false);
    setIsDoneButtonPressed(false);
  }, []);

  const searchTermButtonsConfigs = useMemo(
    () => [
      {
        label: "All",
        onClick: handleAllButton,
        className: classes.allButton,
      },
      {
        label: "Done",
        onClick: handleDoneButton,
        className: classes.doneButton,
      },
      {
        label: "Important",
        onClick: handleImportantButton,
        className: classes.searchImportantButton,
      },
    ],
    [handleAllButton, handleDoneButton, handleImportantButton, classes]
  );

  return (
    <div className={classes.searchInputContainer}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type text for search..."
        className={classes.searchInput}
      />
      <div className={classes.searchButtons}>
        {searchTermButtonsConfigs.map((config) => (
          <button
            key={config.label}
            onClick={config.onClick}
            className={config.className}
          >
            {config.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(SearchBar);
