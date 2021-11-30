import React from 'react'
import styled from 'styled-components'
import brt from '../../assets/img/brt.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={brt} height={120} />}
        title="BroilerPlus is Ready"
        subtitle="Stake HopeNobt tokens to claim your very own yummy BroilerPlus!"
      />

      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <StyledInfo>
        🏆<b>Pro Tip</b>: BroilerPlus-MATIC UNI-V2 LP token pool yields TWICE more token
        rewards per block.
      </StyledInfo>
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="🔪 See the Menu" to="/farms" variant="secondary" />
      </div>
      <Spacer size="lg" />
      <StyledInfo>
        <b>Allswap</b> <br/>is an advanced cross-chains swap, earn stack yields, NTF marketplace all on one decentralized DeFi platform.
        <br/> Decentralized trading protocol (AMM) guaranteed liquidity for users and many multi-chains applications.
        <br/>Turn to a self-boss, with allswap platform home of DeFi.
        <br/><b>Allocation</b><br/>One quadrillion BroilerPlus tokens have been minted at the genesis block.
       <ul>
    <li>60% to BroilerPlus LP mining program.</li>
    <li>24% to team members and future employees.</li>
   <li> 10% to community/airdrop.</li>
   <li> 5% to bug bounty.</li>
    <li>1% to advisors.</li>
</ul>
      </StyledInfo>
      <Spacer size="lg" />
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[50]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[60]};
  }
`

export default Home
