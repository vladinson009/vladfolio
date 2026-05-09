/* eslint-disable @next/next/no-img-element */
import CardsContainerWrapper from '@/components/shared/cards-container-wrapper/cards-container-wrapper';
import Container from '@/components/shared/container';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import classes from './certificates-section.module.css';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon } from 'lucide-react';
import {
  Certificate,
  fetchMostRecentCertificates,
} from '@/services/certificates.services';
import { useTranslations } from 'next-intl';

export default function CertificatesSection() {
  const certificates = fetchMostRecentCertificates();

  return (
    <CardsContainerWrapper>
      <Container className="flex flex-col gap-8 md:flex-row md:gap-3">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </Container>
    </CardsContainerWrapper>
  );
}

function CertificateCard({ certificate }: { certificate: Certificate }) {
  const t = useTranslations('CardButtons');
  const readMore = t('see-more');
  return (
    <Card className={`${classes['animate']} flex-1`}>
      <img src={certificate.imgUrl} alt={`Photo of certificate ${certificate.id}`} />

      <CardContent className="flex flex-col flex-1 gap-4">
        <CardTitle className="text-center m-auto">
          <h3 className="text-xl">{certificate.title}</h3>
        </CardTitle>
        <div className="flex flex-wrap gap-1 justify-center mt-auto">
          <a
            href={certificate.credentialsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="hover:scale-115">
              <ExternalLinkIcon />
              Credentials
            </Button>
          </a>

          {/* <Button className="hover:scale-115" variant="outline">
            {readMore}
          </Button> */}
        </div>
      </CardContent>
    </Card>
  );
}
