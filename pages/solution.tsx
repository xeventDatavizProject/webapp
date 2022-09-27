import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/common/Button/Button';
import Layout from '../components/common/Layout/Layout';
import ProfileCard from '../components/solution/ProfileCard';

const Solution: NextPage = () => {
  return (
    <Layout>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 flex-1'>
            <h1 className='my-8 md:my-8 xl:mt-20 flex flex-col'>
              <span className='tracking-[2px] text-4xl font-large mb-2'>Surveiller votre base de données en temps réel</span>
            </h1>
            <p className='mx-auto md:my-8 text-lg'>
              XDA est une interface qui vous propose plusieurs solutions pour les devops et aussi aux développeurs.
              Elle vous permet de surveiller votre BD et d'être alerté en cas de baisse de performances ou d’anomalies.
              Il vous offre aussi une meilleure visualisation de données à travers des graphiques
            </p>
            <div className='flex flex-col md:flex-row justify-end items-center space-y-4 md:space-y-0 md:space-x-4'>
              <Button className='font-extralight'>Nous contacter</Button>
              <Button className='bg-blue-200 bg-opacity-40 font-extralight'>Demander la demo</Button>
            </div>
          </div>
          <div className='flex w-full px-4 flex-1'>
            <Image
              priority
              src='/assets/images/notifications.png'
              className=''
              height={600}
              width={600}
              alt='Data And Settings'
            />
            <Image
              priority
              src='/assets/images/dataSettings.png'
              className=''
              height={600}
              width={600}
              alt='Data And Settings'
            />
          </div>
        </div>
        <div className='my-8 flex flex-wrap md:my-8 pt-12'>
          <p className='mx-auto md:my-8 text-lg'>
            De plus que les alertes, XDA vous offre une meilleur visualisation sur vous données en proposant un dashboard avec différents graphiques.
            Elle vous permet de surveiller votre BD, d'être alerté en cas de baisse de performances ou d’anomalies et identifier et comprendre la lenteur des requêtes (informations sur les différents services).
          </p>
          <div className='w-full px-4 flex-1'>
            <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 h-2/4'>
              <Image
                priority
                src='/assets/images/DataAndSettings_Monochromatic.png'
                className=''
                height={144}
                width={144}
                alt='Data And Settings'
              />
            </div>
            <p className='flex flex-col h-4/6'>
              <span className='mx-auto'>Visualiser les requêtes les plus fréquentes</span>
            </p>
          </div>
          <div className='my-8 w-full px-4 flex-1'>
            <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 h-2/4'>
              <Image
                priority
                src='/assets/images/DataAndSettings_Two Color.png'
                className=''
                height={300}
                width={300}
                alt='Data And Settings'
              />
            </div>
            <h1 className='flex flex-col h-4/6'>
              <span className='mx-auto'>Visualiser les erreurs ou les requêtes qui ne marchent pas</span>
            </h1>
          </div>
          <div className='my-8 w-full px-4 flex-1'>
            <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 h-2/4'>
              <Image
                priority
                src='/assets/images/AnalyticsTeam_Outline.png'
                className=''
                height={300}
                width={300}
                alt='Data And Settings'
              />
            </div>
            <h1 className='flex flex-col h-2/4'>
              <span className='mx-auto'>Période de la journée ou les clients sont plus actifs</span>
            </h1>
          </div>
          <div className='my-8 w-full px-4 flex-1'>
            <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 h-2/4'>
              <Image
                priority
                src='/assets/images/MoneyAndConsumer.png'
                className=''
                height={144}
                width={144}
                alt='Data And Settings'
              />
            </div>
            <div className='h-2/4'>
              <h1 className='flex flex-col'>
                <span className='mx-auto'>Qui sont les utilisateurs qui consomment le plus </span>
              </h1>
            </div>
          </div>
          <div className='my-8 w-full px-4 flex-1'>
            <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 h-2/4'>
              <Image
                priority
                src='/assets/images/searchGraphic.png'
                className=''
                height={144}
                width={144}
                alt='Data And Settings'
              />
            </div>
            <div className='h-2/4'>
              <h1 className='flex flex-col h-50-px'>
                <span className='mx-auto'>Pic d’utilisation (horaires de surcharge)</span>
              </h1>
            </div>
          </div>
        </div>

        <div>
          <h1 className='my-8 md:my-8 xl:mt-20 flex flex-col'>
            <span className='tracking-[2px] text-4xl font-large mb-2'>Outils</span>
          </h1>
          <div className='my-8 flex flex-wrap md:my-8'>
            <Link href="/">
              <a></a>
            </Link>
            <div className='my-8 w-full px-4 flex-1 h-full'>
              <h1 className='flex flex-col h-4/6 mb-6 text-lg'>
                <span className='mx-auto'>Figma</span>
              </h1>
              <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 h-2/4'>
                <Image
                  priority
                  src='/assets/images/figma.png'
                  className=''
                  height={144}
                  width={144}
                  alt='Data And Settings'
                  style={{
                    color: '#007EFF',
                    backgroundColor: '#FFFFFF',
                  }}
                />
              </div>
            </div>

            <div className='my-8 w-full px-4 flex-1 h-full'>
              <h1 className='flex flex-col h-4/6 mb-6 text-lg'>
                <span className='mx-auto'>Git</span>
              </h1>
              <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 h-2/4'>
                <Image
                  priority
                  src='/assets/images/github.png'
                  className=''
                  height={144}
                  width={144}
                  alt='Data And Settings'
                  style={{
                    color: '#007EFF',
                    backgroundColor: '#FFFFFF',
                  }}
                />
              </div>
            </div>
            <div className='my-8 w-full px-4 flex-1 h-full text-lg'>
              <h1 className='flex flex-col h-4/6 mb-6'>
                <span className='mx-auto'>Asana</span>
              </h1>
              <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 h-2/4'>
                <Image
                  priority
                  src='/assets/images/asana.png'
                  className=''
                  height={144}
                  width={144}
                  alt='Data And Settings'
                  style={{
                    color: '#007EFF',
                    backgroundColor: '#FFFFFF',
                  }}
                />
              </div>
            </div>
            <div className='my-8 w-full px-4 flex-1 h-full'>
              <h1 className='flex flex-col h-4/6 mb-6 text-lg'>
                <span className='mx-auto'>Visual studio code</span>
              </h1>
              <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 h-2/4'>
                <Image
                  priority
                  src='/assets/images/vscode.png'
                  className=''
                  height={144}
                  width={144}
                  alt='Data And Settings'
                  style={{
                    color: '#007EFF',
                    backgroundColor: '#FFFFFF',
                  }}
                />
              </div>
            </div>
            <div className='my-8 w-full px-4 flex-1 h-full'>
              <h1 className='flex flex-col h-4/6 mb-6 text-lg'>
                <span className='mx-auto'>Next.js</span>
              </h1>
              <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 h-2/4'>
                <Image
                  priority
                  src='/assets/images/nextjs.png'
                  className=''
                  height={144}
                  width={144}
                  alt='Data And Settings'
                  style={{
                    color: '#007EFF',
                    backgroundColor: '#FFFFFF',
                  }}
                />
              </div>
            </div>
            <div className='my-8 w-full px-4 flex-1 h-full'>
              <h1 className='flex flex-col h-4/6 mb-6 text-lg'>
                <span className='mx-auto'>Cart.js</span>
              </h1>
              <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 h-2/4'>
                <Image
                  priority
                  src='/assets/images/chartjs.jpeg'
                  className=''
                  height={144}
                  width={144}
                  alt='Data And Settings'
                  style={{
                    color: '#007EFF',
                    backgroundColor: '#FFFFFF',
                  }}
                />
              </div>
            </div>
            <div className='my-8 w-full px-4 flex-1 h-full'>
              <h1 className='flex flex-col h-4/6 mb-6 text-lg'>
                <span className='mx-auto'>Discorde</span>
              </h1>
              <div className='flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 h-2/4'>
                <Image
                  priority
                  src='/assets/images/discorde.png'
                  className=''
                  height={144}
                  width={144}
                  alt='Data And Settings'
                  style={{
                    color: '#007EFF',
                    backgroundColor: '#FFFFFF',
                  }}
                />
              </div>
            </div>
          </div>

        </div>
        <ProfileCard></ProfileCard>

      </div >
    </Layout >
  );
};

export default Solution;
