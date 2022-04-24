import { useState } from 'react';

import type { AssetsModel } from 'atoms';

import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import { BankSelectorWrapper } from './BankSelector.style';

const { ul: Mui, li: Mli, div: Mdiv } = motion;

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
        <Mui layout initial={{ borderRadius: 25 }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            transferAssets.map(({ id, wallet_name, balance }) => (
              <Mli key={id} layout onClick={() => setIsOpen(!isOpen)} initial={{ borderRadius: 10 }}>
                <AnimatePresence>
                  <Mdiv layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <article
                      className={select === wallet_name ? 'match' : undefined}
                      onClick={() => setSelect(wallet_name)}
                    >
                      <div>{wallet_name}</div>
                      <div>{balance.toLocaleString('ko-KR')}</div>
                    </article>
                  </Mdiv>
                </AnimatePresence>
              </Mli>
            ))
          ) : (
            <article>{select ?? '은행을 선택해주세요.'}</article>
          )}
        </Mui>
      </BankSelectorWrapper>
    </AnimateSharedLayout>
  );
};

export default BankSelector;
