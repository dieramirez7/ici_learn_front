import {
  Box,
  Button,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Spinner,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../../../components/layout/Card';
import LevelContext from '../../../context/LevelContext';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import shuffleArray from '../../../utils/shuffleArray';
import LevelsService from '../../../services/levels';
import AuthContext from '../../../context/AuthContext';
import capitalizeFirstLetter from '../../../utils/capitalize';

const LevelTest = () => {
  const levelContext = useContext(LevelContext);
  const [questionIndex, setQuestionIndex] = useState(0);
  const { level } = useParams();
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authContext.user.nivel < level) {
      navigate('/aprende');
    }
    if (!levelContext.checkIfSameLevel(level)) {
      levelContext.getLevel(level);
    }
  }, []);

  useEffect(() => {
    console.log(levelContext.currentLevel);
    if (levelContext.currentLevel) {
      const answers = levelContext.currentLevel.preguntas[
        questionIndex
      ].opciones
        .split(',')
        .map((answer) => answer.trim());
      setCurrentAnswers(shuffleArray(answers));
    }
  }, [levelContext.currentLevel]);

  const handleAnswer = async () => {
    handleProgressBar();

    if (
      levelContext.currentLevel.preguntas[questionIndex].opcion_correcta ===
      selectedAnswer
    ) {
      setSelectedAnswers([...selectedAnswers, true]);
    } else {
      setSelectedAnswers([...selectedAnswers, false]);
    }

    if (questionIndex === levelContext.currentLevel.preguntas.length - 1) {
      await handleSubmit();
      onOpen();
      return;
    }
    setSelectedAnswer(null);
    const answers = levelContext.currentLevel.preguntas[
      questionIndex + 1
    ].opciones
      .split(',')
      .map((answer) => answer.trim());
    setCurrentAnswers(shuffleArray(answers));
    setQuestionIndex(questionIndex + 1);
  };

  const handleProgressBar = () => {
    const oldProgress = progress;
    const newProgress =
      (questionIndex + 1) * (100 / levelContext.currentLevel.preguntas.length);
    var auxProgress = oldProgress;
    const interval = setInterval(() => {
      if (auxProgress >= newProgress) {
        clearInterval(interval);
        return;
      }
      setProgress((oldProgressState) => oldProgressState + 1);
      auxProgress++;
    }, 10);
    if (progress === newProgress) {
      clearInterval(interval);
    }
  };

  const handleSubmit = async () => {
    if (level < authContext.user.nivel) {
      return;
    }
    if (
      (selectedAnswers.filter((a) => a).length / selectedAnswers.length) * 100 >
      80
    ) {
      setIsLoading(true);
      try {
        const res = await LevelsService.levelUp();
        authContext.updateUser(res.usuario);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <Card>
        {levelContext.isLoading ? (
          <Spinner />
        ) : (
          <>
            <Progress
              position='absolute'
              top={0}
              left={0}
              w='100%'
              value={progress}
              colorScheme='blackAlpha'
              display={['none', 'block', 'block']}
            />
            <Text position='absolute' top={5} right={5} fontWeight='bold'>
              Pregunta {questionIndex + 1} de{' '}
              {levelContext.currentLevel.preguntas.length}
            </Text>
            <Text fontSize='2xl' fontWeight='bold'>
              {levelContext.currentLevel.preguntas[questionIndex].pregunta}
            </Text>
            {currentAnswers.map((ans) => {
              return (
                <Box
                  onClick={() => {
                    setSelectedAnswer(ans);
                  }}
                  key={ans}
                  border={
                    selectedAnswer === ans
                      ? '2px solid #828282'
                      : '1px solid #b2b2b2'
                  }
                  borderRadius={15}
                  p={4}
                  bgColor='white'
                  w='100%'
                  _hover={{
                    cursor: 'pointer',
                    shadow: 'md',
                  }}
                >
                  <Flex justifyContent='space-between' align='center' gap={3}>
                    <Text>{capitalizeFirstLetter(ans)}</Text>
                    {selectedAnswer === ans ? (
                      <Icon
                        as={AiOutlineCheckCircle}
                        color={'green.500'}
                        w='20px'
                        h='20px'
                      />
                    ) : (
                      <Box
                        border='1px solid #b2b2b2'
                        borderRadius={30}
                        p={2}
                      ></Box>
                    )}
                  </Flex>
                </Box>
              );
            })}
            <Button
              w='100%'
              colorScheme='blackAlpha'
              size='lg'
              disabled={selectedAnswer === null}
              onClick={handleAnswer}
              isLoading={isLoading}
            >
              Siguiente
            </Button>
          </>
        )}
      </Card>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Resultados examen del nivel {level}</ModalHeader>
          <ModalBody>
            <Center>
              <VStack>
                <CircularProgress
                  size={100}
                  color='gray'
                  value={
                    (selectedAnswers.filter((a) => a).length /
                      selectedAnswers.length) *
                    100
                  }
                >
                  <CircularProgressLabel>
                    {selectedAnswers.filter((a) => a).length} /{' '}
                    {selectedAnswers.length}
                  </CircularProgressLabel>
                </CircularProgress>
                <Text fontSize='2xl'>Puntuación</Text>
                {(selectedAnswers.filter((a) => a).length /
                  selectedAnswers.length) *
                  100 >
                80 ? (
                  <Text fontSize='lg'>
                    Felidades, has aprobado el examen de nivel y puedes
                    continuar con el siguiente.
                  </Text>
                ) : (
                  <Text fontSize='lg'>
                    Lo sentimos, no has aprobado el examen de nivel, pero puedes
                    volver a intentarlo.
                  </Text>
                )}
              </VStack>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button
              w='100%'
              colorScheme='blackAlpha'
              onClick={() => {
                if (
                  (selectedAnswers.filter((a) => a).length /
                    selectedAnswers.length) *
                    100 >
                  80
                ) {
                  onClose();
                  navigate('/aprende', { replace: true });
                } else {
                  navigate(`/aprende/niveles/${level}`, { replace: true });
                }
              }}
            >
              Continuar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LevelTest;
