export default function HeaderItem({ children, isSelected, ...props }) {
  
  return (
    <div className={isSelected ? 'active header-item df-jcc-aic padding-m' : 'not-active header-item df-jcc-aic padding-m'} {...props}>
      <span>{children}</span>
    </div>
  );
}