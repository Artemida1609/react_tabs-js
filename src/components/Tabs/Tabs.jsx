function showContent(tabs, activeId) {
  const activated = tabs.find(tab => tab.id === activeId);

  if (activated) {
    return (
      <div className="block" data-cy="TabContent">
        {activated.content}
      </div>
    )
  }

  return null;
}

export const Tabs = ({
  tabs, 
  activeTabId, 
  onTabSelected,
  }) => {

  const valideIds = ["tab-1", "tab-2", "tab-3"];
  const finalId = valideIds.includes(activeTabId) ? activeTabId : "tab-1";

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab" 
                onClick={() => {
                  tab.id !== activeTabId &&
                    onTabSelected(tab.id)
                }}
                className={tab.id === finalId
                   ? "is-active" : ""}
              >
                <a href={`#${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      {showContent(tabs, activeTabId)}
    </div>
  );
};
