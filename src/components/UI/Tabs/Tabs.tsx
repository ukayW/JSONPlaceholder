import { useState } from 'react';
import styles from './Tabs.module.scss';

export const Tabs = ({ tabs, defaultActiveId, className = '' }: TabsProps) => {
  const [activeId, setActiveId] = useState(defaultActiveId || tabs[0]?.id);

  return (
    <div className={`${styles.root} ${className}`}>
      <div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabsItem} ${activeId === tab.id ? styles.active : ''}`}
            onClick={() => setActiveId(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.tabsContent}>{tabs.find((tab) => tab.id === activeId)?.content}</div>
    </div>
  );
};
