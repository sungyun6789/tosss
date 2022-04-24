import { useState } from 'react';

import type { AssetsModel } from 'atoms';

import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import { BankSelectorWrapper } from './BankSelector.style';

interface Props {
  transferAssets: AssetsModel[];
  select?: string;
  setSelect: (select?: string) => void;
}

const BankSelector = ({ transferAssets, select, setSelect }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimateSharedLayout>
      <BankSelectorWrapper isOpen={isOpen}>
        <motion.ul layout initial={{ borderRadius: 25 }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            transferAssets.map((assets) => (
              <motion.li key={assets.id} layout onClick={() => setIsOpen(!isOpen)} initial={{ borderRadius: 10 }}>
                <AnimatePresence>
                  <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <article
                      className={select === assets.wallet_name ? 'match' : undefined}
                      onClick={() => setSelect(assets.wallet_name === select ? undefined : assets.wallet_name)}
                    >
                      <div>{assets.wallet_name}</div>
                      <div>{assets.balance.toLocaleString('ko-KR')}</div>
                    </article>
                  </motion.div>
                </AnimatePresence>
              </motion.li>
            ))
          ) : (
            <article>{select ?? '은행을 선택해주세요.'}</article>
          )}
        </motion.ul>
      </BankSelectorWrapper>
    </AnimateSharedLayout>
  );
};

export default BankSelector;
