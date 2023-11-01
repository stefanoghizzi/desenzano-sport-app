export default function HeaderItem({ children, onSelect, isSelected }) {
  
  return (
    <div className={isSelected ? 'active header-item df-jcc-aic padding-m' : 'not-active header-item df-jcc-aic padding-m'} onClick={onSelect}>
      <span>{children}</span>
    </div>
  );
}